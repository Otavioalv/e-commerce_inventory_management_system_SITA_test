import { Button } from "./Button";

export interface IConfirmDialogProps {
    open: boolean;
    title?: string;
    description?: string;
    onConfirm: () => void;
    onCancel: () => void;
    isLoading?: boolean;
};

export const ConfirmDialog = ({
    open,
    title,
    description,
    onConfirm,
    onCancel,
    isLoading,
}: IConfirmDialogProps) => {
    if(!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs">
            <div className="bg-white p-6 rounded-md shadow-md w-75">
                
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-sm text-gray-500 mb-4">{description}</p>

                <div className="flex justify-end gap-2">
                    <Button
                        aria-label="cancel-dialog-button"
                        onClick={onCancel}
                        variant={"outline"}
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>

                    <Button 
                        aria-label="comfirm-dialog-button"
                        onClick={onConfirm}
                        disabled={isLoading}
                        variant={isLoading ? "disabled" : "default"}
                    >
                        {isLoading ? "Waiting..." : "Comfirm"}
                    </Button>
                </div>
            </div>
        </div>
    );
};
