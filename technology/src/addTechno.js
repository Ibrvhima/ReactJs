export default function AddTechno() {
  return (
    <div className="addtechno">
      <h1>Add a techno</h1>
      <form>
        <label htmlFor="techno_name">Name:</label>
        <input type="texte" name="techno_name" id="techno_name" />
        <label htmlFor="techno_category">Category:</label>
        <select name="techno_category" id="techno_category">
          <option value="">Select a category</option>
          <option value="Front">Front end</option>
          <option value="Back">Back end</option>
          <option value="Full">Full stack</option>
          <option value="other">Others</option>
        </select>
        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" rows="5" cols="10"></textarea>
        <input type="submit" value="Add Techno" className="button"/>
      </form>
    </div>
  );
}
