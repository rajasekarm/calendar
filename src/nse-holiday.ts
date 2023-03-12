export default (option, dayjsClass, dayjsFactory) => {
    // extend dayjs()
    // e.g. add dayjs().isSameOrBefore()
    dayjsClass.prototype.isHoliday = function() {}
  
    // extend dayjs
    // e.g. add dayjs.utc()
    dayjsFactory.utc = () => {}
  
    // overriding existing API
    // e.g. extend dayjs().format()
    const oldFormat = dayjsClass.prototype.format
    dayjsClass.prototype.format = function() {
      // original format result
      const result = oldFormat.bind(this)(arguments)
      // return modified result
    }
  }