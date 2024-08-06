<template>
    <Page>
        <ActionBar title="Notes App" orientation="horizontal" />

        <ScrollView>
            <StackLayout class="scrollView" style="margin-top: 5rem">
                <TextField
                    v-model="newNote"
                    class="addNoteTextField"
                    hint="Enter Note..."
                    returnKeyType="save"
                    @returnPress="addNote"
                />
                <Button class="addNoteBtn" text="Add Note" @tap="addNote" />

                <StackLayout>
                    <Label
                        v-if="notes.length > 0"
                        v-for="(note, index) in notes"
                        :key="index"
                        :text="note"
                        class="note"
                        :row="index"
                        :column="index"
                    />
                    <Label v-else class="noNote" text="No Notes" />
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import {
    Label,
    ScrollView,
    TextField,
    StackLayout,
    Button,
} from "@nativescript/core";

export default {
    data() {
        return {
            notes: [],
            newNote: "",
        };
    },
    methods: {
        addNote() {
            if (this.newNote.trim()) {
                this.notes.push(this.newNote);
                this.newNote = "";
            }
        },
    },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

@media (min-width: 600px) {
    .scrollView {
        width: 50%;
    }
}

// Custom styles
.addNoteTextField {
    font-size: 25px;
}

.note {
    margin: 5rem;
    font-size: 30px;
    font-weight: 500;
    outline: 2px solid #aaa;
    padding: 2rem;
    color: white;
    background-color: cornflowerblue;
    text-align: center;
    border-radius: 5px;
}

.noNote {
    height: 80px;
    width: 150px;
    border-radius: 10px;
    color: white;
    padding: 2rem;
    background-color: crimson;
}

.addNoteBtn {
    width: 30%;
    font-weight: 500;
    font-size: 21px;
    background-color: cornflowerblue;
    color: white;
}

.titleActionBar {
    display: flex;
    justify-content: space-between;
}
</style>
