import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// export const selectCollection = collectionUrlParam => createSelector(
//     [selectCollections],
//     (collections) => collections[collectionUrlParam]
// );

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        (collections) => (collections ? collections[collectionUrlParam] : null)
    )
);

export const selectCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)