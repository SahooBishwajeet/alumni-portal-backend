import mongoose, { Document } from 'mongoose';

export interface IMap extends Document {
    id: string;
    latitude: number;
    longitude: number;
    alumniList: String[];
}

const MapSchema = new mongoose.Schema<IMap>({
    id: { type: String, default: () => crypto.randomUUID(), unique: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    alumniList: [{ type: String, ref: 'AlumniDetails' }],
});

export default mongoose.model<IMap>('Map', MapSchema);
