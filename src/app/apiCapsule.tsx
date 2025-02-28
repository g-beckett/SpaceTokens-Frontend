interface CapsuleData {
   // userId: [];
    capsuleName: string;
    unlockedDate: Date; 
    description: string;
    isPublic: Boolean;
    statusId: string;
}

export const createCapsule = async (capsuleData: CapsuleData) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    try {
        console.log('worked');
        const response = await fetch('http://localhost:8080/space-tokens/api/v1/capsule/new?userId={userId}', {
            method: 'POST',
            body: JSON.stringify(capsuleData),  
            headers: myHeaders,
        });

        if (!response.ok) {  
            throw new Error(`HTTP error: ${response.status}`);
        }
        const responseData = await response.json();  
        console.log('yip yip hooray:', responseData);

    } catch (error) {
        console.error('errrr:', error);
    }
};

export default createCapsule;