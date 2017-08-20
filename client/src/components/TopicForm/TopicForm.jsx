// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// Project Assets
import TextInput from '../TextInput';
import TextareaInput from '../TextareaInput';
import SelectInput from '../SelectInput';

const propTypes = {
  categories: PropTypes.array.isRequired,
  topic: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string.isRequired,
  }),
  getTopic: PropTypes.func.isRequired,
  updateCurentTopicAuthor: PropTypes.func.isRequired,
  updateCurentTopicBody: PropTypes.func.isRequired,
  updateCurentTopicCategory: PropTypes.func.isRequired,
  updateCurentTopicTitle: PropTypes.func.isRequired,
}

class TopicForm extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    if (this.props.topic.id) {
      this.props.getTopic(this.props.topic.id);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({
      ...this.props.topic,
      id: uuid(),
      timestamp: new Date().getTime(),
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.handleUpdate({
      ...this.props.topic,
      timestamp: new Date().getTime(),
    })
  }

  render() {
    const { author, body, category, id, title } = this.props.topic;
    const { categories } = this.props;

    return (
      <form onSubmit={id ? this.handleUpdate : this.handleSubmit}>
        <TextInput
          onChange={this.props.updateCurentTopicTitle}
          placeholder="Awesome title"
          value={title}
        />

        <TextInput
          onChange={this.props.updateCurentTopicAuthor}
          placeholder="Tell everyone your name"
          value={author}
        />

        <SelectInput
          onChange={this.props.updateCurentTopicCategory}
          options={categories}
          placeholder="Select a category"
          value={category}
        />

        <TextareaInput
          onChange={this.props.updateCurentTopicBody}
          placeholder="What do you have to say?"
          value={body}
        />

        <button className="btn btn-outline-primary">
          {id ? 'Update' : 'Publish'}
        </button>
      </form>
    );
  }
}

TopicForm.propTypes = propTypes;

export default TopicForm;
