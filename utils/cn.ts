import classNames from 'classnames';

// Fungsi untuk menggabungkan class dengan kondisi
const cn = (...args: (string | object | undefined | null)[]): string => {
  return classNames(...args);
};

export default cn;
