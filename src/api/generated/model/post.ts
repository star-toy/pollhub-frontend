/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * polling API
 * polling API Document
 * OpenAPI spec version: 1.0.0
 */
import type { Poll } from './poll';

export interface Post {
  createdAt?: string;
  createdBy: string;
  fileId: string;
  id: number;
  isDeleted: boolean;
  polls?: Poll[];
  postUid: string;
  title: string;
  updatedAt?: string;
  updatedBy?: string;
}
