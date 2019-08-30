export default class {
  constructor(props) {
    this.props = props;
  }

  isValid() {
    const { id, name, email, age, ...rest } = this.props;

    return (
      id && typeof id === 'string' &&
      name && typeof name === 'string' &&
      email && typeof email === 'string' &&
      age && typeof age === 'string'
    ) && (Object.keys(rest).length === 0)
  }
}