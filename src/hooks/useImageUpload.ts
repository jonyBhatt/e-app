import { useCallback } from "react";
import { useVoterStore } from "@/store/useVoterStore";
import toast from "react-hot-toast";

export const useImageUpload = (type: "profile" | "slip") => {
  const { profileImage, slipImage, setProfileImage, setSlipImage } = useVoterStore();
  
  // Determine which image and setter to use based on the type
  const preview = type === "profile" ? profileImage : slipImage;
  const setter = type === "profile" ? setProfileImage : setSlipImage;

  const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
     
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setter(base64String); // Now it's saved in the global store!
        toast.success("Uploaded..")
      };

      reader.readAsDataURL(file);
    }
  }, [setter]);

  const clearImage = () => setter(null);

  return { preview, handleUpload, clearImage };
};