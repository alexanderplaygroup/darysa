'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/common/components/shadcn-ui/dialog';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PromotionalModalProps {
  modal: string;
}

export const PromotionalModal: React.FC<PromotionalModalProps> = ({ modal }) => {
  const [showModal, setShowModal] = useState(false);
  console.log('modal:', modal);
  useEffect(() => {
    // Mostrar el modal solo si no se ha mostrado en esta sesión
    if (!sessionStorage.getItem('promoModalShown')) {
      setShowModal(true);
      sessionStorage.setItem('promoModalShown', 'true');
    }
  }, []);

  return (
    <Dialog modal open={showModal} onOpenChange={setShowModal}>
      <DialogContent
        aria-description="Promoción especial"
        aria-describedby="Promoción especial"
        className="border-none p-0"
      >
        <DialogHeader>
          <DialogTitle>Promoción especial </DialogTitle>
          <DialogDescription id="promotional-modal-description" className="sr-only">
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Image
          src={modal}
          alt="Promotional Modal"
          width={500}
          height={300}
          className="h-full w-full rounded-lg object-cover"
          priority
        />
      </DialogContent>
    </Dialog>
  );
};
