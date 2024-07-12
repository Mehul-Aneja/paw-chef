
export const fetchDishes = async () => {
    const response = await fetch('http://pawchef-backend-lb-1434329021.us-east-1.elb.amazonaws.com/dishes/api/dishes/');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const fetchTeam = async () => {
    const response = await fetch('http://pawchef-backend-lb-1434329021.us-east-1.elb.amazonaws.com/team/api/team/');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const deleteDish = async (id) => {
    const response = await fetch(`http://pawchef-backend-lb-1434329021.us-east-1.elb.amazonaws.com/dishes/api/dishes/delete/${id}/`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete dish');
    }
};

export const addDish = async (formData) => {
    const response = await fetch(`http://pawchef-backend-lb-1434329021.us-east-1.elb.amazonaws.com/dishes/api/dishes/`, {
        method: 'POST',
        body: formData,
    });
    if (!response.ok) {
        throw new Error('Failed to add dish');
    }
    return await response.json();
};