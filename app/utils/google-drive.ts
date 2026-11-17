export type DriveContentType = "auto" | "folder" | "video" | "image" | "file";
export type DriveAction = "preview" | "view" | "direct";

export interface ParsedDriveInfo {
  isDriveUrl: boolean;
  detectedType: "folder" | "video" | "image" | "file" | "unknown";
  id: string | null;
  optimizedUrl: string;
}

/**
 * Extracts Google Drive ID (file or folder) and categorizes the resource
 */
export function parseGoogleDriveUrl(
  rawInput: string,
  preferredType: DriveContentType = "auto",
  action: DriveAction = "preview"
): ParsedDriveInfo {
  const trimmed = rawInput.trim();

  if (!trimmed) {
    return {
      isDriveUrl: false,
      detectedType: "unknown",
      id: null,
      optimizedUrl: "",
    };
  }

  // 1. Detect Google Drive Folder
  const folderMatch =
    trimmed.match(/\/drive\/(?:u\/\d+\/)?folders\/([a-zA-Z0-9_-]+)/i) ||
    trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)(?:.*&usp=sharing)?/i);

  const isFolderUrl =
    trimmed.includes("/folders/") ||
    (preferredType === "folder" && !trimmed.includes("/file/d/"));

  if (isFolderUrl) {
    const fIdMatch = trimmed.match(/\/folders\/([a-zA-Z0-9_-]+)/i) || trimmed.match(/([a-zA-Z0-9_-]{20,})/);
    const folderId = fIdMatch ? fIdMatch[1] : null;

    if (folderId) {
      return {
        isDriveUrl: true,
        detectedType: "folder",
        id: folderId,
        optimizedUrl: `https://drive.google.com/drive/folders/${folderId}?usp=sharing`,
      };
    }
  }

  // 2. Detect Google Drive File (Video, Image, PDF, Document)
  const fileMatch =
    trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/i) ||
    trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/i) ||
    trimmed.match(/\/open\?id=([a-zA-Z0-9_-]+)/i) ||
    trimmed.match(/\/uc\?.*id=([a-zA-Z0-9_-]+)/i);

  if (fileMatch) {
    const fileId = fileMatch[1];
    const isLikelyDrive = trimmed.includes("drive.google.com") || trimmed.includes("docs.google.com");

    // Determine type
    let finalType: "video" | "image" | "file" = "file";
    if (preferredType === "video") finalType = "video";
    else if (preferredType === "image") finalType = "image";
    else if (preferredType === "file") finalType = "file";
    else {
      // Heuristic detection from query or URL
      const lower = trimmed.toLowerCase();
      if (lower.includes("video") || lower.includes(".mp4") || lower.includes(".mov") || lower.includes(".webm")) {
        finalType = "video";
      } else if (lower.includes("image") || lower.includes(".jpg") || lower.includes(".png") || lower.includes(".webp") || lower.includes(".jpeg")) {
        finalType = "image";
      }
    }

    // Determine optimized URL based on action
    let targetUrl: string;
    if (action === "preview") {
      // Direct full-screen stream viewer (ideal for videos and photo viewing)
      targetUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    } else if (action === "direct") {
      if (finalType === "image") {
        targetUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
      } else {
        targetUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
    } else {
      // Standard view with Drive chrome
      targetUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
    }

    return {
      isDriveUrl: isLikelyDrive,
      detectedType: finalType,
      id: fileId,
      optimizedUrl: targetUrl,
    };
  }

  // 3. Fallback for raw URLs or direct media links
  return {
    isDriveUrl: trimmed.includes("drive.google.com"),
    detectedType: preferredType === "auto" ? "unknown" : (preferredType as any),
    id: null,
    optimizedUrl: trimmed,
  };
}

export const SAMPLE_DRIVE_LINKS = {
  video: {
    label: "Sample 4K Video Stream",
    url: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view?usp=sharing",
    type: "video" as DriveContentType,
    action: "preview" as DriveAction,
    desc: "Scanning immediately opens full-screen video player without sidebar clutter.",
  },
  image: {
    label: "Sample High-Res Photo",
    url: "https://drive.google.com/file/d/1Z_uJ7h8m0gL9K_DriveSampleImage/view?usp=sharing",
    type: "image" as DriveContentType,
    action: "preview" as DriveAction,
    desc: "Scanning immediately opens high-resolution photograph view in browser.",
  },
  folder: {
    label: "Sample Shared Media Folder",
    url: "https://drive.google.com/drive/folders/1A2B3C4D5E6F_SampleMediaVault?usp=sharing",
    type: "folder" as DriveContentType,
    action: "view" as DriveAction,
    desc: "Scanning immediately displays entire folder with all videos, images, and subfolders.",
  },
};
