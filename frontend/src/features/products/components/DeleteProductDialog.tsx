import { ConfirmDialog } from "../../../shared/components/ui/ConfirmDialog";

import type { IConfirmDialogProps } from "../../../shared/components/ui/ConfirmDialog";

type IDeleteProductDialogProps = Omit<IConfirmDialogProps, "title" | "description">;

export const DeleteProductDialog = ({
    ...props
}: IDeleteProductDialogProps) => {
    return (
        <ConfirmDialog
            title="Delete Product"
            description="Are you sure you want to delete this product?"
            {...props}
        />
    );
}
