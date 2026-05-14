import { useState, useCallback } from "react";

export const useImageUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreview(base64String);
        // Here you would typically also update your Zustand store
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const clearImage = () => setPreview(null);

  return { preview, handleUpload, clearImage };
};