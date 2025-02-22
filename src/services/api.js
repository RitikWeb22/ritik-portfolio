import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust if needed

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 🔹 Get all projects (supports pagination & sorting)
export const getProjects = async (page = 1, limit = 10, sortBy = 'createdAt', order = 'desc') => {
    try {
        const response = await api.get(`/projects`, {
            params: { page, limit, sortBy, order },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Get a single project
export const getProjectById = async (id) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching project:', error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Create a new project
export const createProject = async (projectData) => {
    try {
        const response = await api.post(`/projects`, projectData);
        return response.data;
    } catch (error) {
        console.error('Error creating project:', error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Update an existing project
export const updateProject = async (id, projectData) => {
    try {
        const response = await api.put(`/${id}`, projectData);
        return response.data;
    } catch (error) {
        console.error('Error updating project:', error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Delete a project
export const deleteProject = async (id) => {
    try {
        const response = await api.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting project:', error.response?.data || error.message);
        throw error;
    }
};
export const getDashboardData = async () => {
    try {
        const response = await api.get('/projects');  // Ensure your backend has this endpoint
        return response.data;
    } catch (error) {
        console.error("Error fetching dashboard data:", error.response?.data || error.message);
        throw error;
    }
};


