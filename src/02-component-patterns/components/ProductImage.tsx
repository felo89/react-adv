import { CSSProperties, useContext } from 'react'

import { ProductContext } from './ProductCard'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
  className?: string,
  img?: string,
  style?: CSSProperties,
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext)
  const image = img || product.img || noImage
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={image}
      alt='Product'
      style={style}
    />
  )
}
