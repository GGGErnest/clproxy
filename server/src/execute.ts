import { ChildProcessWithoutNullStreams, exec, spawn } from 'child_process';
import { Observable } from 'rxjs';

export class Execute {
    public static runningProcess = new Map<number, ChildProcessWithoutNullStreams>();
    public static execCommandAsProcess(
        command: string,
        commandArguments?: string[]
    ): Observable<string> {
        return new Observable<string>((subscriber) => {
            const process = spawn(command, commandArguments);
            if (process.pid) {
                this.runningProcess.set(process.pid, process);
                process.stdout.on('data', (data) => {
                    subscriber.next(data);
                });
                process.stderr.on('data', (data) => {
                    subscriber.next(data);
                });

                process.on('error', (error) => {
                    subscriber.error(error);
                });

                process.on('close', () => {
                    subscriber.next('finished');
                    subscriber.complete();
                });
            }
        });
    }

    public static execCommand(command: string): Observable<string> {
        return new Observable<string>((subscriber) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    subscriber.error(error.message);
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    subscriber.error(stderr);
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                subscriber.next(stdout);
                subscriber.complete();
            });
        });
    }

    public static destroy() {
        Execute.runningProcess.forEach((process, pid) => {
            process.kill(pid);
        });
    }
}
