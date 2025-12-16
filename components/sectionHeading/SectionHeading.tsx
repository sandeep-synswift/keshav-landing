'use client';

import { ReactNode, Children, isValidElement } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function getTextFromChildren(children: ReactNode): string {
  if (typeof children === 'string') {
    return children;
  }
  if (typeof children === 'number') {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join(' ');
  }
  if (isValidElement(children) && children.props.children) {
    return getTextFromChildren(children.props.children);
  }
  return '';
}

export default function SectionHeading({ 
  children, 
  className = '', 
  as: Component = 'h2' 
}: SectionHeadingProps) {
  const text = getTextFromChildren(children);
  const words = text.trim().split(/\s+/);
  const firstWord = words[0] || '';
  const restWords = words.slice(1).join(' ');

  return (
    <Component className={className}>
      <span className="font-semibold">{firstWord}</span>
      {restWords && <span className="font-light"> {restWords}</span>}
    </Component>
  );
}

