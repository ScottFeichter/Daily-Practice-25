document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result');
    let csrfToken = null;

    const displayResult = (content) => {
        resultDiv.textContent = typeof content === 'string'
            ? content
            : JSON.stringify(content, null, 2);
    };

    // Get initial CSRF token
    const getCSRFToken = async () => {
        try {
            const response = await fetch('/test-csrf-get');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            csrfToken = response.headers.get('x-csrf-token');
            if (csrfToken) {
                document.getElementById('csrf-token').content = csrfToken;
            }
            console.log('Retrieved CSRF token:', csrfToken); // Debug log
        } catch (err) {
            console.error('Error getting CSRF token:', err);
        }
    };

    // Initialize by getting the token
    getCSRFToken();

    document.getElementById('showToken').addEventListener('click', async () => {
        try {
            const response = await fetch('/test-csrf-debug');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // Update token if provided
            const newToken = response.headers.get('x-csrf-token');
            if (newToken) {
                csrfToken = newToken;
                document.getElementById('csrf-token').content = csrfToken;
                console.log('Updated CSRF token:', csrfToken); // Debug log
            }
            displayResult(data);
        } catch (err) {
            displayResult(`Error: ${err.message}`);
            console.error('Error:', err);
        }
    });

    document.getElementById('testPost').addEventListener('click', async () => {
        try {
            if (!csrfToken) {
                throw new Error('No CSRF token available');
            }

            console.log('Sending POST with token:', csrfToken); // Debug log

            const response = await fetch('/test-csrf-post', {
                method: 'POST',
                headers: {
                    'X-CSRF-Token': csrfToken,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ test: 'data' }),
                credentials: 'same-origin'
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const data = await response.json();
            // Update token if provided
            const newToken = response.headers.get('x-csrf-token');
            if (newToken) {
                csrfToken = newToken;
                document.getElementById('csrf-token').content = csrfToken;
            }
            displayResult(data);
        } catch (err) {
            displayResult(`Error: ${err.message}`);
            console.error('Error:', err);
        }
    });
});
