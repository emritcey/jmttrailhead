export const buildPackingList = (packingList) => {
    return {
        type: 'BUILD_PACKING_LIST',
        payload: packingList,
    }
}