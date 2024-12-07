class FilterHelper {
  static getFilterCriteria(status) {
    const validStatuses = ['TODO', 'IN_PROGRESS', 'COMPLETED'];

    // Validate and build the filter query
    return validStatuses.includes(status) ? { status } : {};
  }
}

module.exports = FilterHelper;
