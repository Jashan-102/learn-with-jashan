function JSBasic() {
  return (
    <>
      <h3>Basics of JS:</h3>
      <div>
        <p>
          <strong>variables:</strong>
          it store some info., we can use that info and change that info
        </p>
        <p>
          <strong>Types of variables:</strong>
          <br />
          <span>var</span>
          <br />
          <span>let</span>
          <br />
          <span>const</span>
          <br />
        </p>
        <p>JS is Case sensitive</p>
        <p>
          <strong>Rules for declaring variable:</strong>
        </p>
        <ul>
          <li>Can't start with number</li>
          <li>Can't use spaces(use camelCase OR snake_case)</li>
          <li>Can only use dollar sign OR underscore</li>
        </ul>
        <p>
          <strong>Primitive Data Type: </strong>
          It store inside callstack. Will define d/f memories for d/f variables.
          So, one variable never effects other, even if one value is assigned to
          other and modify value.
        </p>
        <p>
          <strong>Reference Data Type: </strong>
          It store info in Heap memory. It place and assign a pointer OR address
          of store data in Heap memory to "callstack". When an data updated.
          Address related to it will show that.
        </p>
      </div>
    </>
  );
}
export default JSBasic;
