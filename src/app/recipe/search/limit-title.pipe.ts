import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'limittitle'
})
export class LimitTitlePipe implements PipeTransform {
    transform(title: any, limit:number = 17) {
        const newTitle = [];

        if (title.length > limit) { 
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
            return `${newTitle.join(' ')}...`;
        } else {
            return title;
        }
    }
}