"use client"

import Link from 'next/link';
import { Category, Media } from '../../../../payload/payload-types';

import classes from './index.module.scss';
import { useFilter } from '../../../_providers/Filter';

export default function CategoryCard({ category } : {
  category: Category
}) {
  const media = category.media as Media;
  const { setCategoryFilters } = useFilter();

  return (
    <Link href='/products' className={classes.card}
      style={{ backgroundImage: `url(${media.url})` }}
      onClick={() => {
        setCategoryFilters([category.id]);
      }}
    >
      <p className={classes.title}>
        {category.title}
      </p>
    </Link>
  )
}