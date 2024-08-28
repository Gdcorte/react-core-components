export function getElementRawDimensions(element?: Element | null): {
  width: number;
  height: number;
} {
  const dimension = {
    width: 0,
    height: 0,
  };
  if (element === undefined || element === null) {
    return dimension;
  }

  const computedStyle = window.getComputedStyle(element);

  dimension.width = parseFloat(computedStyle.width);
  dimension.height = parseFloat(computedStyle.height);

  return dimension;
}

export function getElementInternalDimensions(element: Element | null): {
  width: number;
  height: number;
} {
  const dimension = {
    width: 0,
    height: 0,
  };
  if (element === undefined || element === null) {
    return dimension;
  }

  const computedStyle = window.getComputedStyle(element);

  dimension.width =
    parseFloat(computedStyle.width) +
    parseFloat(computedStyle.marginLeft) +
    parseFloat(computedStyle.marginRight) +
    parseFloat(computedStyle.borderLeft) +
    parseFloat(computedStyle.borderRight) +
    parseFloat(computedStyle.paddingLeft) +
    parseFloat(computedStyle.paddingRight);

  dimension.height =
    parseFloat(computedStyle.height) +
    parseFloat(computedStyle.marginTop) +
    parseFloat(computedStyle.marginBottom) +
    parseFloat(computedStyle.borderTop) +
    parseFloat(computedStyle.borderBottom) +
    parseFloat(computedStyle.paddingTop) +
    parseFloat(computedStyle.paddingBottom);

  return dimension;
}

export function getChildrenAccDimensions(element?: Element | null): {
  width: number;
  height: number;
} {
  const dimension = {
    width: 0,
    height: 0,
  };

  if (element === undefined || element === null) {
    return dimension;
  }

  Array.from(element.children).forEach((childElement) => {
    const childDim = getElementInternalDimensions(childElement);
    dimension.width += childDim.width;
    dimension.height += childDim.height;
  });

  return dimension;
}
