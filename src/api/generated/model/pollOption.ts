/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * polling API
 * polling API Document
 * OpenAPI spec version: 1.0.0
 */
import type { Poll } from './poll';

export interface PollOption {
  createdAt?: string;
  createdBy: string;
  fileId?: string;
  id: number;
  isDeleted: boolean;
  poll?: Poll;
  pollOptionSeq: number;
  pollOptionText?: string;
  pollOptionUid: string;
  updatedAt?: string;
  updatedBy?: string;
}
