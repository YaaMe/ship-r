export const ACTION_TYPE = {
  GET_ACTIVITY: 'GET_ACTIVITY'
};
export const getActivity = () => ({
  type: ACTION_TYPE.GET_ACTIVITY,
  $fetch: {
    requestBody: {
      url: '/markdown/activity.md'
    }
  }
});
