/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface JoinFormData {
  fullName: string;
  email: string;
  state: string;
  district: string;
  age: number;
  whyJoin: string;
}

export interface PromiseItem {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Governance' | 'Development' | 'Youth' | 'Services';
  icon?: string; // lucide icon identifier
}

export interface TimelineStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  details: string[];
}
