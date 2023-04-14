import Note from "../../Other/Note";

function JSBasic(props) {
  return (
    <section id="js-basics">
      <h3 className="h3">Basics of JS:</h3>
      <div>
        <h4 className="h4">Variables:</h4>
        <p>It stores some info., we can use that info and change that info.</p>
        <h6 className="h6">Types of variables:</h6>
        <span>var, let, const</span>
        <Note note="JavaScript is Case Sensitive" wrapperClass="w-1/4" />
        <h6 className="h6">Rules for declaring variable:</h6>
        <ul className="list-decimal list-inside">
          <li>Can't start with number</li>
          <li>Can't use spaces (use camelCase OR snake_case)</li>
          <li>Can only use dollar sign OR underscore</li>
        </ul>
        <h6 className="h6">Primitive Data Type:</h6>
        <p>
          It store inside callstack. Will define d/f memories for d/f variables.
          So, one variable never effects other, even if one value is assigned to
          other and modify value.
        </p>
        <h6 className="h6">Reference Data Type:</h6>
        <p>
          It store info in Heap memory. It place and assign a pointer OR address
          of store data in Heap memory to "callstack". When an data updated.
          Address related to it will show that.
        </p>
      </div>
    </section>
  );
}
export default JSBasic;
