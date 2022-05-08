import {scale} from './scale';
import {PRIMARY} from './colors';

type typographyType = {
  regular: string;
  medium: string;
  demibold: string;
  bold: string;
};

type sizeType = {
  small: number;
  regular: number;
  large: number;
  giant: number;
};

type fontType = {
  typography?: typographyType;
  sizes?: sizeType;
  types?: any;
};

const fonts: fontType = {
  typography: {
    regular: 'Helvetica Neue',
    medium: 'Helvetica Neue',
    demibold: 'Helvetica Neue',
    bold: 'Helvetica Neue',
  },
  sizes: {
    small: scale(14),
    regular: scale(18),
    large: scale(20),
    giant: scale(24),
  },
  get types() {
    return {
      normalText: {
        fontFamily: this.typography?.regular,
        fontSize: this.sizes?.large,
        color: PRIMARY,
      },
      headingText: {
        fontFamily: this.typography?.demibold,
        fontSize: this.sizes?.giant,
        color: PRIMARY,
      },
    };
  },
};

export default fonts;
