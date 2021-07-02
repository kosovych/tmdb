// Helper to get wrapper of the actual STATEFUL (defined as class)
// component that resides inside shallow-rendered HOC
//
// Due to enzyme's instance() returning null for functional
// components, this function works only with ones that
// defined as class
// Enzyme's dive() dive only through HOC's
// so you can't reach nested components
// (dive() method may only be run on a single, non-DOM node)

// Possibly fixed version, that does not suffer from `instance()` returning `null`

function diveTo(wrapper, TargetComponent) {
  wrapper.single((node) => {
    if (node && node.nodeType === 'host') {
      throw new Error('diveTo(): Target component not found, but other host component was reached (nested components is not supported by dive())')
    }
  })

  // `.type()` returns type of current node, not a root component, so it needs one more .`dive()`
  if (wrapper.type() === TargetComponent) { return wrapper.dive() }

  const targetWrapper = wrapper.dive()
  return diveTo(targetWrapper, TargetComponent)
}

export default diveTo
