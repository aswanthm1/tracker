let userName = '';
let tasks = JSON.parse(localStorage.getItem('at_tasks') || '[]');
let filt = 'all';
const CIRC = 2 * Math.PI * 40;

// Onboarding Logic
function startDashboard() {
    const input = document.getElementById('nameInput');
    const val = input.value.trim();
    
    if (!val) {
        input.style.borderColor = 'var(--danger)';
        return;
    }

    userName = val;
    localStorage.setItem('at_uname', val);
    
    document.getElementById('onboarding').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('userAvatar').textContent = userName[0].toUpperCase();
    
    render();
}

// Task Actions
function addTask() {
    const nameInp = document.getElementById('taskInput');
    const dateInp = document.getElementById('dueDate');
    const prioInp = document.getElementById('priority');

    if (!nameInp.value.trim()) return;

    const newTask = {
        id: Date.now(),
        name: nameInp.value.trim(),
        date: dateInp.value,
        priority: prioInp.value,
        done: false
    };

    tasks.unshift(newTask);
    nameInp.value = '';
    render();
}

function toggleTask(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
    render();
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    render();
}

function setF(filterType, btn) {
    filt = filterType;
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
}

// UI Rendering
function render() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    const filtered = tasks.filter(t => {
        if (filt === 'done') return t.done;
        if (filt === 'pending') return !t.done;
        return true;
    });

    filtered.forEach(t => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.innerHTML = `
            <div class="checkbox ${t.done ? 'on' : ''}" onclick="toggleTask(${t.id})"></div>
            <div style="flex: 1">
                <div style="font-size: 14px; font-weight: 500; ${t.done ? 'text-decoration: line-through; color: var(--soft)' : ''}">
                    ${t.name}
                </div>
                <span class="priority-tag ${t.priority}">${t.priority}</span>
            </div>
            <button class="del-btn" onclick="deleteTask(${t.id})">✕</button>
        `;
        list.appendChild(card);
    });

    updateStats();
}

function updateStats() {
    const total = tasks.length;
    const done = tasks.filter(t => t.done).length;
    const pending = total - done;
    const pct = total ? Math.round((done / total) * 100) : 0;

    document.getElementById('stT').textContent = total;
    document.getElementById('stD').textContent = done;
    document.getElementById('stL').textContent = pending;
    
    document.getElementById('ringPct').textContent = pct + '%';
    document.getElementById('ringF').style.strokeDashoffset = CIRC - (pct / 100) * CIRC;

    localStorage.setItem('at_tasks', JSON.stringify(tasks));
}

// Auto-load if name exists
window.onload = () => {
    const savedName = localStorage.getItem('at_uname');
    if (savedName) {
        document.getElementById('nameInput').value = savedName;
    }
};