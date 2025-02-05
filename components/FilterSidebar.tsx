"use client";

import { useState } from "react";

export interface FilterState {
  customizable: boolean;
  idealFor: string[];
  priceRange: number;
}

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

export default function FilterSidebar({ onFilterChange }: FilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    customizable: false,
    idealFor: [],
    priceRange: 1000,
  });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">CUSTOMIZABLE</h2>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-300"
              checked={filters.customizable}
              onChange={(e) =>
                handleFilterChange({ customizable: e.target.checked })
              }
            />
            <span>All</span>
          </label>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">IDEAL FOR</h2>
          <div className="space-y-2">
            {["Men", "Women", "Kids"].map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  checked={filters.idealFor.includes(category)}
                  onChange={(e) => {
                    const newIdealFor = e.target.checked
                      ? [...filters.idealFor, category]
                      : filters.idealFor.filter((item) => item !== category);
                    handleFilterChange({ idealFor: newIdealFor });
                  }}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">PRICE RANGE</h2>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange}
            onChange={(e) =>
              handleFilterChange({ priceRange: Number(e.target.value) })
            }
            className="w-full accent-black"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>${filters.priceRange}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
