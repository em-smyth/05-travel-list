export default function Stats({ items }) {
  // early return -> if items length is zero the following code does not need to be ran
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 💼</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything packed! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} items (${percentage}%). 💼`}
      </em>
    </footer>
  );
}
