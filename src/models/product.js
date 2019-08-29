export default class {
  constructor(props) {
    this.props = props;
  }

  isValid() {
    const { id, name, brand, price, options, reviews, ...rest } = this.props;

    return (
      id && typeof id === 'string' &&
      name && typeof name === 'string' &&
      brand && typeof brand === 'string' &&
      price && typeof price === 'number' &&
      options && Array.isArray(options) &&
      reviews && Array.isArray(reviews)
    ) && (Object.keys(rest).length === 0)
  }
}