import mongoose from 'mongoose';

export interface ImageInterface {
    _id: mongoose.Types.ObjectId;
    title: string;
    description?: string;
    imgUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
    price?: string;
    category?: string;
    isFeatured?: boolean;
}

const imageSchema = new mongoose.Schema<ImageInterface>({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    imgUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    price: { type: String, default: '0' },
    category: { type: String, default: 'classical' },
    isFeatured: { type: Boolean, default: false }
}, {
    timestamps: true
})

const Image = mongoose.models?.Image || mongoose.model<ImageInterface>('Image', imageSchema);

export default Image;