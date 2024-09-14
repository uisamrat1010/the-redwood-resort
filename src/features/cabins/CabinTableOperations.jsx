import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { label: "All", value: "all" },
          { label: "No-Discount", value: "no-discount" },
          { label: "With-Discount", value: "with-discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-dec", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price(Low - High)" },
          { value: "regularPrice-dec", label: "Sort by Price(High - Low)" },
          {
            value: "maxCapacity-asc",
            label: "Sort by Capacity(Low - High)",
          },
          {
            value: "maxCapacity-dec",
            label: "Sort by Capacity(High - Low)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
