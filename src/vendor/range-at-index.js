/**
 * range-at-index
 * https://github.com/webmodules/range-at-index/
 * Nathan Rajlich
 *
 * Forked from version 1.0.4; includes the following modifications:
 * 1) Change module.exports to export default.
 **/

/**
 * Returns a Range instance selecting text within HTML Element `el`,
 * at the given `start` and `end` offsets.
 *
 * @param {HTMLElement} el - DOM element to select text within
 * @public
 */

function RangeAtIndex(el, index, offset, range) {
  var doc = el.ownerDocument;
  if (!range) range = doc.createRange();

  let iterator = doc.createNodeIterator(el, NodeFilter.SHOW_TEXT, null, false);

  let start = {};
  let end = {};
  let node, val, len;

  while ((node = iterator.nextNode())) {
    val = node.nodeValue;
    len = val.length;

    if (!start.node && len > index) {
      start.node = node;
      start.offset = index;
    }

    if (!end.node && len >= offset) {
      end.node = node;
      end.offset = offset;
    }

    index -= len;
    offset -= len;
  }

  // update the range with the start and end offsets
  if (start.node) range.setStart(start.node, start.offset);
  if (end.node) range.setEnd(end.node, end.offset);

  return range;
}

export default RangeAtIndex;
