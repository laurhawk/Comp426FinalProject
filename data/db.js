const study_data = require('data-store')({ path: process.cwd() + '/data/data.json' });

class StudySpot {

    constructor (id, name, wouldStudy, rating, comments, image) {
        this.id = id;
        this.name = name;
        this.wouldStudy = wouldStudy;
        this.rating = rating;
        this.comments = comments;
        this.image = image;
    }

    update () {
        study_data.set(this.id.toString(), this);
    }

    delete () {
        study_data.del(this.id.toString());
    }
}

StudySpot.getAllIDs = () => {
    return Object.keys(study_data.data).map((id => {return parseInt(id);}));
}

StudySpot.findByID = (id) => {
    let sdata = study_data.get(id);
    if (sdata != null) {
        return new StudySpot(sdata.id, sdata.name, sdata.wouldStudy, sdata.rating, sdata.comments, sdata.image);
    }
    return null;
}

StudySpot.next_id = StudySpot.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

StudySpot.create = (name, wouldStudy, rating, comments, image) => {
    let id = StudySpot.next_id;
    StudySpot.next_id += 1;
    let s = new StudySpot(id, name, wouldStudy, rating, comments, image);
    study_data.set(b.id.toString(), b);
    return s;
}

//let s1 = new StudySpot(13, "Wilson Library", true, 4, "Too quiet");
//study_data.set(s1.id.toString(), s1);

module.exports = StudySpot;