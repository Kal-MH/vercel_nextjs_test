'use client';
import React from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
  children: React.ReactNode;
}

export default function Recoil({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
