function Filter({ findId }) {
  return (
    <>
      <label for={findId}>Find contacts by name</label>
      <input id={findId} type="text" />
    </>
  );
}

export default Filter;
