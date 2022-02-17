import defaultTaskRunner from '@nrwl/workspace/tasks-runners/default';
export default function runner(tasks: Parameters<typeof defaultTaskRunner>[0], options: Parameters<typeof defaultTaskRunner>[1] & {
    bucket?: string;
}, context: Parameters<typeof defaultTaskRunner>[2]): import("rxjs").Observable<import("@nrwl/workspace/src/tasks-runner/tasks-runner").AffectedEvent>;
