import "./Checkbox.scss";

type CheckboxProps = {
    label: string;
    checked: boolean;
    onChange: () => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    return (
        <label className="checkbox-label">
            {label}
            <input
                className="checkbox-input"
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
        </label>
    );
};

export default Checkbox;
