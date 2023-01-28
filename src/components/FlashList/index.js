import PropTypes from 'prop-types';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import Spinner from '../Spinner';
import {ListFooter, ListEmpty} from './Sections';

function InfiniteFlashList(props) {
  const emptyListText =
    props.loading || props.refreshing
      ? 'Loading'
      : props.emptyText || 'No data';

  if (!props.data.length && props.loading) {
    return (
      <Spinner
        color={'#fff'}
        size="large"
        processing={!props.data.length && props.loading}
      />
    );
  }

  return (
    <FlashList
      ref={props.getRef}
      data={props.data}
      renderItem={React.useCallback(props.renderItem)}
      keyExtractor={React.useCallback(props.keyExtractor)}
      refreshing={React.useCallback(props.refreshing)}
      onRefresh={React.useCallback(props.onRefresh)}
      onEndReached={React.useCallback(props.onEndReached)}
      onEndReachedThreshold={props.onEndReachedThreshold}
      {...props}
      removeClippedSubviews={props.removeClippedSubviews}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      estimatedItemSize={props.estimatedItemSize}
      ListEmptyComponent={() => {
        if (props.renderListEmpty) {
          return props.renderListEmpty(props);
        }
        return <ListEmpty text={emptyListText} />;
      }}
      ListFooterComponent={() => {
        if (props.renderListFooter) {
          return props.renderListFooter(props);
        }
        return <ListFooter loading={props.loading} />;
      }}
      ListHeaderComponent={() => {
        if (props.renderListHeader) {
          return props.renderListHeader(props);
        }
        return null;
      }}
      {...props}
    />
  );
}

InfiniteFlashList.propTypes = {
  /**
   * The items to display - default: []
   */
  data: PropTypes.array,
  /**
   * Loading flag (initial load and paging) - default: false
   */
  loading: PropTypes.bool,
  /**
   * Refreshing flag (pull-to-refresh) - default: false
   */
  refreshing: PropTypes.bool,
  /**
   * Text to display when no items - default: 'No data'
   */
  emptyText: PropTypes.string,
  /**
   * The render item function - default: noop
   */
  renderItem: PropTypes.func,
  /**
   * The fetch action to dispatch paging requests - default: noop
   */
  onEndReached: PropTypes.func,
  /**
   * How far from the end of the list before triggering the onEndReached function
   * */
  onEndReachedThreshold: PropTypes.number,
  /**
   * The fetch action to dispatch initial load and pull to refresh - default: noop
   */
  onRefresh: PropTypes.func,
  /**
   * The resource key extractor - default: object id
   */
  keyExtractor: PropTypes.func,
  /**
   * removeClippedSubviews - default: false
   */
  removeClippedSubviews: PropTypes.bool,
  /**
   * Component to display when no items - default: 'null'
   */
  renderListEmpty: PropTypes.func,
  /**
   * Rendered at the bottom of all the items - default: 'null'
   */
  renderListFooter: PropTypes.func,
  /**
   * Rendered at the top of all the items - default: 'null'
   */
  renderListHeader: PropTypes.func,

  estimatedItemSize: PropTypes.number,
};

InfiniteFlashList.defaultProps = {
  data: [],
  loading: false,
  refreshing: false,
  emptyText: '',
  renderItem: () => {},
  onEndReached: () => {},
  onEndReachedThreshold: 0.75,
  onRefresh: () => {},
  keyExtractor: resource => resource.id,
  removeClippedSubviews: false,
  renderListEmpty: null,
  renderListFooter: null,
  renderListHeader: null,
  getRef: () => {},
  estimatedItemSize: 200,
};

export default InfiniteFlashList;
