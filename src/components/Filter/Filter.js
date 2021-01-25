import shortid from 'shortid';

function Filter({ value, onChange }) {
  const findId = shortid.generate();
  return (
    <>
      <label for={findId}>Find contacts by name</label>
      <input id={findId} type="text" value={value} onChange={onChange} />
    </>
  );
}

export default Filter;
