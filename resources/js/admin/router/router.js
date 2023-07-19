import Vue from 'vue';
import VueRouter from 'vue-router';

import TaskIndex from "../pages/tasks/TaskIndex";
import PendingTasksIndex from "../pages/pendingTasks/PendingTasksIndex";
import CompletedTasksIndex from "../pages/completedTasks/CompletedTasksIndex";
import CreateTask from "../components/tasks/CreateTask";
import CompleteTask from "../components/tasks/CompleteTask";
import DeleteTask from "../components/tasks/DeleteTask";
import LoginIndex from "../pages/auth/login/LoginIndex";
import RegisterIndex from "../pages/auth/register/RegisterIndex";

Vue.use(VueRouter);

const prefix = '/admin';

let routes = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: prefix +'/',
            component: CreateTask,
            name:'create-task',
            meta: {
                requireAuth: true,
                title: 'Create Task'
            }
        },
        {
            path: prefix +'/tasks',
            component: TaskIndex,
            name:'tasks',
            meta: {
                requireAuth: true,
                title: 'Tasks'
            }
        },
        {
            path: prefix +'/pending-tasks',
            component: PendingTasksIndex,
            name:'pending-tasks',
            meta: {
                requireAuth: true,
                title: 'Pending Tasks'
            }
        },
        {
            path: prefix +'/completed-tasks',
            component: CompletedTasksIndex,
            name:'completed-tasks',
            meta: {
                requireAuth: true,
                title: 'Complete Tasks'
            }
        },
        {
            path: prefix +'/complete-task',
            component: CompleteTask,
            name:'complete-task',
            meta: {
                requireAuth: true,
                title: 'Complete Task'
            }
        },
        {
            path: prefix +'/delete-task',
            component: DeleteTask,
            name:'delete-task',
            meta: {
                requireAuth: true,
                title: 'Delete Task'
            }
        },
        {
            path: prefix +'/login',
            component: LoginIndex,
            name:'login',
            beforeEnter: (to,from, next) => {
                if (localStorage.getItem('authFlag')){
                    next({name :'tasks'})
                }else{
                    next();
                }
            }
        },
        {
            path: prefix +'/register',
            component: RegisterIndex,
            name:'register',
            beforeEnter: (to,from, next) => {
                if (localStorage.getItem('authFlag')){
                    next({name :'tasks'});
                }else{
                    next();
                }
            }
        },
        {
            path: prefix +'/*',
            redirect: {name:'create-task'}
        },
    ]
});

routes.beforeEach((to,from, next) => {
    if (to.matched.some((record) => record.meta.requireAuth)){
        if (localStorage.getItem('authFlag')){
            next(); //termina de hacer la comparación
        }else{
            next({name :'login'});
        }
    }else{
        next();
    }
});

export default routes;

/*export default new VueRouter({
    mode: 'history',
    routes
});*/
