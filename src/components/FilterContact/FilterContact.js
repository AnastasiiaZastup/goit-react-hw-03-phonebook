import { Filters } from './FilterContact.styled';
export const FilterContact = ({ filter , onUpdateContact}) => {
    return (
        <Filters>
            Filter contacts by name:
            <input type="text"
                value={filter}
                onChange={evt => onUpdateContact(evt.target.value)} />
        </Filters>
    );
};