import React, { createContext, useContext } from "react";

const RadioGroupContext = createContext(null);

const RadioGroup = React.forwardRef(({ className = "", defaultValue, value, onValueChange, children, ...props }, ref) => {
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue);

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleValueChange = (newValue) => {
    if (value === undefined) {
      setSelectedValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <RadioGroupContext.Provider value={{ selectedValue, onValueChange: handleValueChange }}>
      <div 
        ref={ref} 
        role="radiogroup" 
        className={`space-y-2 ${className}`}
        {...props}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
});

const RadioGroupItem = React.forwardRef(({ className = "", value, children, disabled = false, ...props }, ref) => {
  const context = useContext(RadioGroupContext);
  
  if (!context) {
    throw new Error("RadioGroupItem must be used within a RadioGroup");
  }

  const { selectedValue, onValueChange } = context;
  const isSelected = selectedValue === value;

  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <div className="relative">
        <input
          type="radio"
          ref={ref}
          value={value}
          checked={isSelected}
          disabled={disabled}
          onChange={() => !disabled && onValueChange(value)}
          className="sr-only"
          {...props}
        />
        <div 
          className={`h-4 w-4 rounded-full border ${
            isSelected 
              ? 'border-primary bg-primary' 
              : 'border-gray-300 bg-white'
          } ${
            !disabled && !isSelected 
              ? 'hover:border-primary/50' 
              : ''
          }`}
        >
          {isSelected && (
            <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          )}
        </div>
      </div>
      {children && (
        <span className="text-sm font-medium leading-none">
          {children}
        </span>
      )}
    </label>
  );
});

RadioGroup.displayName = "RadioGroup";
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };