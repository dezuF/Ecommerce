import { CldUploadWidget } from "next-cloudinary";
import { Plus, Trash } from "lucide-react";

import { Button } from '../ui/button';

interface ImageUploadProps{
    value: string[];
    onChange:(value: string) => void;
    onRemove:(value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
    return (
       <CldUploadWidget uploadPreset="xqst3dsc" onUpload={onUpload}>
        {({ open }) => {
          return (
            <Button type="button" onClick={() => open()} className="bg-grey-1 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    );
};

export default ImageUpload;